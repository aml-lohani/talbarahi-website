import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

function buildEmailHtml(data: {
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  woolType: string;
  message: string;
}) {
  const row = (label: string, value: string) =>
    value
      ? `<tr>
          <td style="padding:10px 0;border-bottom:1px solid #F0E8E4;vertical-align:top;width:36%;">
            <span style="font-family:Arial,sans-serif;font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#8B2C2C;">${label}</span>
          </td>
          <td style="padding:10px 0 10px 16px;border-bottom:1px solid #F0E8E4;vertical-align:top;">
            <span style="font-family:Arial,sans-serif;font-size:14px;color:#2B2B29;">${value}</span>
          </td>
        </tr>`
      : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>New Enquiry — Tal Barahi Handicraft</title>
</head>
<body style="margin:0;padding:0;background:#F5EDE8;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5EDE8;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#2B2B29;padding:40px 48px 32px;border-radius:4px 4px 0 0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:9px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:rgba(224,213,208,0.6);">New Enquiry</p>
                    <h1 style="margin:0;font-size:28px;font-weight:600;color:#FDF9F7;line-height:1.1;font-style:italic;">
                      Tal Barahi Handicraft
                    </h1>
                    <div style="width:32px;height:2px;background:#8B2C2C;margin-top:14px;"></div>
                  </td>
                  <td align="right" style="vertical-align:top;">
                    <div style="width:48px;height:48px;background:#8B2C2C;border-radius:3px;display:inline-flex;align-items:center;justify-content:center;">
                      <span style="color:#FDF9F7;font-size:20px;font-weight:700;line-height:1;">✉</span>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Alert banner -->
          <tr>
            <td style="background:#8B2C2C;padding:14px 48px;">
              <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:#FDF9F7;letter-spacing:0.04em;">
                A new enquiry has been submitted through the website contact form.
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#FFFFFF;padding:40px 48px;">

              <!-- Sender info -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td style="background:#FDF9F7;border:1px solid #E0D5D0;border-radius:3px;padding:20px 24px;">
                    <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:9px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#8B2C2C;">From</p>
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:20px;font-weight:600;color:#2B2B29;font-style:italic;">${data.name}</p>
                    ${data.company ? `<p style="margin:4px 0 0;font-family:Arial,sans-serif;font-size:13px;color:#666666;">${data.company}</p>` : ''}
                    <p style="margin:6px 0 0;font-family:Arial,sans-serif;font-size:13px;color:#8B2C2C;">
                      <a href="mailto:${data.email}" style="color:#8B2C2C;text-decoration:none;">${data.email}</a>
                    </p>
                    ${data.phone ? `<p style="margin:2px 0 0;font-family:Arial,sans-serif;font-size:13px;color:#666666;">${data.phone}</p>` : ''}
                  </td>
                </tr>
              </table>

              <!-- Details table -->
              <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:9px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#8B2C2C;">Enquiry Details</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                ${row('Industry', data.industry)}
                ${row('Wool Type', data.woolType)}
              </table>

              <!-- Message -->
              <p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:9px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#8B2C2C;">Message</p>
              <div style="background:#FDF9F7;border-left:3px solid #8B2C2C;padding:20px 24px;border-radius:0 3px 3px 0;margin-bottom:36px;">
                <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#2B2B29;line-height:1.75;white-space:pre-wrap;">${data.message}</p>
              </div>

              <!-- Reply CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <a href="mailto:${data.email}?subject=Re: Your enquiry to Tal Barahi Handicraft"
                      style="display:inline-block;background:#8B2C2C;color:#FDF9F7;font-family:Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;text-decoration:none;padding:14px 28px;border-radius:3px;">
                      Reply to ${data.name}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F5EDE8;padding:28px 48px;border-radius:0 0 4px 4px;border-top:1px solid #E0D5D0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;font-weight:600;color:#2B2B29;">Tal Barahi Handicraft</p>
                    <p style="margin:2px 0 0;font-family:Arial,sans-serif;font-size:11px;color:#999999;">Mulpani, Kathmandu, Nepal &nbsp;·&nbsp; Est. 1994</p>
                  </td>
                  <td align="right">
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:10px;color:#BBBBBB;">Submitted via website contact form</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildAutoReplyHtml(name: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>We received your enquiry — Tal Barahi Handicraft</title>
</head>
<body style="margin:0;padding:0;background:#F5EDE8;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5EDE8;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#2B2B29;padding:40px 48px 32px;border-radius:4px 4px 0 0;">
              <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:9px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:rgba(224,213,208,0.6);">Tal Barahi Handicraft</p>
              <h1 style="margin:0;font-size:28px;font-weight:600;color:#FDF9F7;line-height:1.15;font-style:italic;">
                Thank you, ${name}.
              </h1>
              <div style="width:32px;height:2px;background:#8B2C2C;margin-top:14px;"></div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#FFFFFF;padding:40px 48px;">
              <p style="margin:0 0 20px;font-family:Arial,sans-serif;font-size:15px;color:#2B2B29;line-height:1.75;">
                We have received your enquiry and will be in touch personally within <strong>1–2 business days</strong>.
              </p>
              <p style="margin:0 0 32px;font-family:Arial,sans-serif;font-size:14px;color:#666666;line-height:1.75;">
                Our team in Kathmandu reviews every message carefully. Whether you are sourcing raw wool, exploring quality grades, or learning about our supply capabilities, we look forward to a genuine conversation about how we can support your work.
              </p>

              <!-- Divider -->
              <div style="border-top:1px solid #E0D5D0;margin-bottom:32px;"></div>

              <!-- Info strip -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:0 12px 0 0;vertical-align:top;width:50%;border-right:1px solid #E0D5D0;">
                    <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:9px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#8B2C2C;">Our Location</p>
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:13px;color:#2B2B29;">Mulpani, Kathmandu, Nepal</p>
                  </td>
                  <td style="padding:0 0 0 24px;vertical-align:top;">
                    <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:9px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#8B2C2C;">Wool Origin</p>
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:13px;color:#2B2B29;">100% New Zealand</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F5EDE8;padding:28px 48px;border-radius:0 0 4px 4px;border-top:1px solid #E0D5D0;">
              <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;font-weight:600;color:#2B2B29;">Tal Barahi Handicraft</p>
              <p style="margin:2px 0 0;font-family:Arial,sans-serif;font-size:11px;color:#999999;">
                Mulpani, Kathmandu, Nepal &nbsp;·&nbsp; Est. 1994 &nbsp;·&nbsp;
                <a href="mailto:info@talbarahihandicraft.com.np" style="color:#8B2C2C;text-decoration:none;">info@talbarahihandicraft.com.np</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, phone, industry, woolType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || 'info@talbarahihandicraft.com.np';

    const [notifyResult, autoReplyResult] = await Promise.all([
      // Notification to Tal Barahi
      resend.emails.send({
        from: 'Contact Form <noreply@talbarahihandicraft.com.np>',
        to: toEmail,
        replyTo: email,
        subject: `New Enquiry from ${name}${company ? ` — ${company}` : ''}`,
        html: buildEmailHtml({ name, company, email, phone, industry, woolType, message }),
      }),
      // Auto-reply to sender
      resend.emails.send({
        from: 'Tal Barahi Handicraft <hello@talbarahihandicraft.com.np>',
        to: email,
        subject: 'We received your enquiry — Tal Barahi Handicraft',
        html: buildAutoReplyHtml(name),
      }),
    ]);

    if (notifyResult.error) {
      console.error('Resend notify error:', notifyResult.error);
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
