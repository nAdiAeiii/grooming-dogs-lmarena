#!/bin/sh
# Downloads the site's own verified Pexels photos (BUILD/images.tsv) into assets/photos/.
# Needs network access to images.pexels.com.
cd "$(dirname "$0")"
python3 -c "import json;[print(p['pexels_id'],p['file']) for p in json.load(open('photos.json'))]" | while read id file; do
  curl -fsSL -m 60 -o "$file" "https://images.pexels.com/photos/$id/pexels-photo-$id.jpeg?auto=compress&cs=tinysrgb&w=1600" && echo "ok $file" || echo "FAILED $file"
done
