import nodemailer from 'nodemailer'

export async function POST(req: Request) {
	try {
		const {name, email, message} = await req.json();
		
		if (!name || !email || !message) {
			return new Response(JSON.stringify({ error: 'All fields are required.', success: false }), { status: 400 });
		}
		console.log("env", process.env.GMAIL_ADDR, process.env.GMAIL_PASS);
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.GMAIL_ADDR,
				pass: process.env.GMAIL_PASS,
			}
		});

		await transporter.sendMail({
			from: `"${name}" <${process.env.GEMAIL_ADDR}>`,
			to: process.env.GMAIL_ADDR,
			replyTo: email,
			subject: `New Message from ${name}`,
			html: `
				<h1>Contact Form Submission</h1>
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Message:</strong></p>
				<p>${message}</p>
			`
		});

		return new Response(JSON.stringify({ success: true, message: 'Email sent successfully.' }), { status: 200 });
	}
	catch (error) {
		console.error('Error sending email:', error);
		return new Response(JSON.stringify({ error: 'Failed to send email.', success: false }), { status: 500 });
	}
}