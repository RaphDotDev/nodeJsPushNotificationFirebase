## 🔐 Setting Up Firebase Private Key

Follow these steps to configure Firebase and generate a private key for server-side use (e.g., push notifications with Node.js):

---

### 📦 1. Install Required Packages (Node.js)

In your Node.js project directory, install the necessary dependencies:

```bash
npm install express firebase-admin
```

---

### ⚙️ 2. Set Up Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com).
2. Click **Add project** and follow the setup process.
3. In the project overview:

   * Navigate to **Project Settings** → **General**.
   * Scroll down to **Your apps** and click **\</>** to add a web app or choose **Android** if you're using Flutter.
4. For Flutter setup:

   * Download the `google-services.json` file for Android.
   * Place it in your Flutter project under:
     `android/app/google-services.json`

---

### 🔑 3. Generate Firebase Admin Private Key

1. In the Firebase Console, go to **Project Settings** → **Service Accounts**.
2. Click **Generate new private key**.
3. Save the downloaded JSON file securely.
4. Place the file in your Node.js project (e.g., in a `config` directory):

```
project-root/
├── config/
│   └── firebase-admin-key.json
```

> ⚠️ **Important:** Never commit this private key file to Git.
> Add it to `.gitignore`:
>
> ```gitignore
> config/firebase-admin-key.json
> ```

---

### ✅ Done!

Your Firebase Admin SDK key is now ready to use in your Node.js server. You can initialize the SDK like this:

```js
const admin = require("firebase-admin");
const serviceAccount = require("./config/firebase-admin-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
```

Now you're ready to use Firebase features like sending push notifications or managing users.
