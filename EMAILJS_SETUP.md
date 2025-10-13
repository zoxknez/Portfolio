# EmailJS Setup Instructions / Uputstvo za podešavanje EmailJS-a

## English Instructions

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Connect Your Email Service
1. After logging in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email
5. **Copy the Service ID** (you'll need this later)

### Step 3: Create Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

**Subject:** New Contact from Portfolio - {{from_name}}

**Content:**
```
You have received a new message from your portfolio:

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. **Copy the Template ID** (you'll need this later)

### Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (starts with something like "user_...")
3. **Copy the Public Key**

### Step 5: Update Your .env File
Open the `.env` file in your project root and replace the placeholders:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

### Step 6: Restart Development Server
After updating `.env`, restart your development server:
```bash
npm run dev
```

### Step 7: Test Your Contact Form
1. Go to your portfolio website
2. Fill out the contact form
3. Click "Send Message"
4. Check your email inbox for the message!

---

## Srpske Instrukcije

### Korak 1: Napravi EmailJS nalog
1. Idi na https://www.emailjs.com/
2. Klikni "Sign Up" i napravi besplatan nalog
3. Potvrdi svoju email adresu

### Korak 2: Poveži svoj Email servis
1. Nakon što se uloguješ, idi na **Email Services** u dashboard-u
2. Klikni **Add New Service**
3. Izaberi svog email provajdera (Gmail, Outlook, itd.)
4. Prati instrukcije da povežeš svoj email
5. **Kopiraj Service ID** (biće ti potreban kasnije)

### Korak 3: Napravi Email šablon
1. Idi na **Email Templates** u dashboard-u
2. Klikni **Create New Template**
3. Koristi ovu strukturu šablona:

**Subject:** Novi kontakt sa Portfolio sajta - {{from_name}}

**Content:**
```
Primio si novu poruku sa svog portfolio sajta:

Od: {{from_name}}
Email: {{from_email}}

Poruka:
{{message}}
```

4. **Kopiraj Template ID** (biće ti potreban kasnije)

### Korak 4: Uzmi svoj Public Key
1. Idi na **Account** → **General**
2. Pronađi svoj **Public Key** (počinje sa nečim kao "user_...")
3. **Kopiraj Public Key**

### Korak 5: Ažuriraj .env fajl
Otvori `.env` fajl u root-u projekta i zameni placeholder vrednosti:

```env
VITE_EMAILJS_PUBLIC_KEY=tvoj_public_key_ovde
VITE_EMAILJS_SERVICE_ID=tvoj_service_id_ovde
VITE_EMAILJS_TEMPLATE_ID=tvoj_template_id_ovde
```

### Korak 6: Restartuj Development Server
Nakon ažuriranja `.env` fajla, restartuj development server:
```bash
npm run dev
```

### Korak 7: Testiraj kontakt formu
1. Idi na svoj portfolio sajt
2. Popuni kontakt formu
3. Klikni "Pošalji Poruku"
4. Proveri svoju email sandučicu za poruku!

---

## Features / Funkcionalnosti

✅ **Working contact form** - Funkcionalna kontakt forma
✅ **WhatsApp direct link** - Direktan link za WhatsApp
✅ **Viber direct link** - Direktan link za Viber
✅ **Fallback to mailto** - Automatski prelaz na mailto ako EmailJS nije konfigurisan
✅ **Success/Error messages** - Poruke o uspehu/grešci
✅ **Loading state** - Stanje tokom slanja
✅ **Form validation** - Validacija forme
✅ **Bilingual support** - Dvojezična podrška (EN/SR)

## Notes / Napomene

- **Free tier** allows 200 emails/month - **Besplatni plan** dozvoljava 200 emailova mesečno
- The `.env` file is already in `.gitignore` (safe) - `.env` fajl je već u `.gitignore` (bezbedno)
- If EmailJS is not configured, form will fallback to mailto - Ako EmailJS nije konfigurisan, forma će koristiti mailto
- WhatsApp/Viber links work immediately - WhatsApp/Viber linkovi odmah rade

## Troubleshooting / Rešavanje problema

**Problem:** Email not sending
**Solution:** Check browser console for errors, verify all 3 keys are correct

**Problem:** Email ne šalje se
**Rešenje:** Proveri konzolu u browseru za greške, proveri da su sva 3 ključa ispravna

---

**Need help?** Contact me via WhatsApp or Viber: +381 60 049 4451
**Trebaš pomoć?** Kontaktiraj me preko WhatsApp ili Viber: +381 60 049 4451
