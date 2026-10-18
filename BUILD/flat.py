import json,sys,re,html
def walk(el,d=0,out=[]):
    if el['elType']=='container':
        s=el['settings']; tag='SECTION' if not el.get('isInner') else 'BOX'
        out.append('  '*d+f"[{tag} {s.get('_element_id','')} bg={s.get('background_color','')} w={s.get('boxed_width',{}).get('size','')} border={s.get('border_color','')}]")
        for c in el['elements']: walk(c,d+1,out)
    else:
        s=el['settings']; wt=el['widgetType']
        if wt=='heading': out.append('  '*d+f"<{s['header_size']}#{s.get('_element_id','')}> {s['title']}")
        elif wt=='text-editor':
            t=re.sub(r'<[^>]+>',' ',s['editor']); t=html.unescape(re.sub(r'\s+',' ',t)).strip()
            out.append('  '*d+f"TEXT{'('+('lead' if 'secondary' in json.dumps(s) else 'small' if 'accent' in json.dumps(s) else '')+')'}: {t[:150]}")
        elif wt=='accordion': out.append('  '*d+'ACCORDION: '+' | '.join(t['tab_title'] for t in s['tabs']))
        else: out.append('  '*d+wt.upper()+': '+json.dumps(s)[:120])
    return out
d=json.load(open(sys.argv[1],encoding='utf-8'))
o=[]
for el in d: walk(el,0,o)
print('\n'.join(o))
