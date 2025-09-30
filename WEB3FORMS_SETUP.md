# 📧 Web3Forms Setup Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Get Your Free Access Key

1. Go to **https://web3forms.com**
2. Enter your email: `redouane.boulhimez@email.com`
3. Click "Get Access Key"
4. Check your email for the access key (it looks like: `a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890`)

### Step 2: Add Your Access Key to the Code

1. Open `src/App.tsx`
2. Find line 1051 (around the contact form section)
3. Replace `YOUR_ACCESS_KEY_HERE` with your actual access key
4. Save the file

**Example:**
```tsx
<input type="hidden" name="access_key" value="a1b2c3d4-e5f6-7890-a1b2-c3d4e5f67890" />
```

### Step 3: Test Your Form

1. Run your portfolio locally: `npm run dev`
2. Go to the contact section
3. Fill out the form and submit
4. Check your email (`redouane.boulhimez@email.com`) for the message!

### Step 4: Deploy to Vercel

Once you've added your access key:

```bash
git add src/App.tsx
git commit -m "Add Web3Forms contact form integration"
git push origin main
```

Vercel will automatically redeploy with the working contact form!

---

## ✨ What's Included

Your contact form now has:

✅ **No Backend Needed** - Web3Forms handles everything
✅ **Free Forever** - 250 submissions/month on free plan
✅ **Email Notifications** - Get emails instantly when someone contacts you
✅ **Spam Protection** - Built-in spam filtering
✅ **Custom Subject Line** - "Nouveau message depuis le portfolio"
✅ **Professional** - Clean, modern form design

---

## 📊 Features

- **Instant Notifications**: Emails arrive in seconds
- **Form Data**: Name, Email, and Message captured
- **Success Messages**: Users get confirmation when form is sent
- **Error Handling**: Graceful error messages if something fails
- **Mobile Friendly**: Works perfectly on all devices

---

## 🔧 Customization Options

You can customize the form by editing the hidden fields in `src/App.tsx`:

```tsx
{/* Change the email subject */}
<input type="hidden" name="subject" value="Your Custom Subject" />

{/* Change the sender name */}
<input type="hidden" name="from_name" value="Your Portfolio" />

{/* Redirect after submission (optional) */}
<input type="hidden" name="redirect" value="https://yoursite.com/thank-you" />
```

---

## 📧 Email Format

When someone contacts you, you'll receive an email like this:

```
From: Portfolio Contact Form
Subject: Nouveau message depuis le portfolio

Name: John Doe
Email: john@example.com

Message:
Bonjour, j'aimerais discuter d'un projet avec vous...
```

---

## 🆘 Troubleshooting

### Form not sending?
- Check that you replaced `YOUR_ACCESS_KEY_HERE` with your actual key
- Verify your internet connection
- Check browser console for errors (F12)

### Not receiving emails?
- Check your spam folder
- Verify the email used in Web3Forms setup
- Wait a few minutes (sometimes delayed)

### Still having issues?
- Visit https://web3forms.com/docs
- Contact Web3Forms support
- Or use an alternative like Formspree.io

---

## 🎯 Alternative Services (if needed)

If you prefer a different service:

1. **Formspree** - https://formspree.io (also free)
2. **EmailJS** - https://emailjs.com (free tier)
3. **Getform** - https://getform.io (free tier)

---

## 📚 Resources

- Web3Forms Docs: https://web3forms.com/docs
- Dashboard: https://web3forms.com/dashboard
- Support: https://web3forms.com/support

---

**Made with ❤️ for your portfolio**
