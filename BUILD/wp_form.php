<?php
/**
 * GD-20 §F contact form (WPForms Lite). O-1 resolved 2026-10-05: the owner created contact@grooming-dogs.com (Hostinger Email).
 * Run: wp --user=1 eval-file wp_form.php
 */
$existing = get_posts( [ 'post_type' => 'wpforms', 'post_status' => 'any', 'title' => 'Contact and corrections', 'numberposts' => 1, 'fields' => 'ids' ] );
$id = $existing ? $existing[0] : wpforms()->obj( 'form' )->add( 'Contact and corrections', [], [ 'builder' => false ] );

$data = [
	'id'     => (string) $id,
	'field_id' => 6,
	'fields' => [
		'1' => [ 'id' => '1', 'type' => 'select', 'label' => 'What is this about?', 'required' => '1', 'size' => 'large',
		         'placeholder' => 'Choose one',
		         'choices' => [
			         '1' => [ 'label' => 'A correction or source problem', 'value' => '' ],
			         '2' => [ 'label' => 'A question about a guide', 'value' => '' ],
			         '3' => [ 'label' => 'A missing topic', 'value' => '' ],
			         '4' => [ 'label' => 'A site problem (broken link, accessibility, something not working)', 'value' => '' ],
		         ] ],
		'2' => [ 'id' => '2', 'type' => 'text', 'label' => 'Which page?', 'required' => '0', 'size' => 'large',
		         'placeholder' => "Paste the page address, if it's about a page" ],
		'3' => [ 'id' => '3', 'type' => 'textarea', 'label' => 'Your message', 'required' => '1', 'size' => 'large',
		         'description' => "For corrections, tell us the sentence or section, what's wrong, and a source if you have one." ],
		'4' => [ 'id' => '4', 'type' => 'email', 'label' => 'Your email (optional)', 'required' => '0', 'size' => 'large',
		         'description' => "Only if you'd like a reply." ],
		'5' => [ 'id' => '5', 'type' => 'checkbox', 'label' => 'Privacy acknowledgement', 'required' => '1',
		         'choices' => [ '1' => [ 'label' => 'I understand how what I send is handled, as described in the privacy policy.', 'value' => '' ] ],
		         'description' => '<a href="/privacy-policy/">Read the privacy policy</a>' ],
	],
	'settings' => [
		'form_title'            => 'Contact and corrections',
		'form_desc'             => '',
		'submit_text'           => 'Send message',
		'submit_text_processing'=> 'Sending...',
		'antispam'              => '1',
		'antispam_v3'           => '1',
		'honeypot'              => '1',
		'store_spam_entries'    => '0',
		'ajax_submit'           => '1',
		'notification_enable'   => '1',   // O-1: owner-supplied inbox
		'notifications'         => [ '1' => [ 'email' => 'contact@grooming-dogs.com', 'subject' => 'Grooming Dogs contact form', 'sender_name' => 'Grooming Dogs', 'sender_address' => 'wordpress@grooming-dogs.com', 'replyto' => '{field_id="4"}', 'message' => '{all_fields}' ] ],
		'confirmations'         => [ '1' => [ 'type' => 'message', 'message' => '<p>Thanks, your message has been sent.</p>', 'message_scroll' => '1' ] ],
	],
	'meta' => [ 'template' => 'blank' ],
];
wpforms()->obj( 'form' )->update( $id, $data );
echo "form_id=$id\n";
