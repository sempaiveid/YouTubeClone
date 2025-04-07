🎬 Клон YouTube
Цей проєкт — клон YouTube, що використовує YouTube Data API v3 для пошуку, відображення та відтворення відео.

🚀 Функції
🔍 Пошук відео за ключовими словами

📺 Відтворення відео через вбудований плеєр

📢 Перегляд інформації про канали

🎨 Мінімалістичний інтерфейс

📌 Встановлення та налаштування
1️⃣ Отримайте API-ключ
Перейдіть до Google Cloud Console.

Створіть новий проєкт.

Увімкніть YouTube Data API v3.

Створіть OAuth 2.0 Client ID та Client Secret.

Додайте scope:

Перейдіть у Credentials, виберіть OAuth 2.0, виберіть dataAccess і додайте scope:
```
https://www.googleapis.com/auth/youtube.force-ssl
```
Перейдіть у Credentials, натисніть на свій OAuth 2.0 Client ID і додайте Redirect URL, наприклад:
```
http://localhost:5501
```
2️⃣ Створіть файл APIKEY.js
У корені проєкту створіть файл APIKEY.js і додайте до нього свої ключі і обовязково isVideo = false:
```
const APIKEY = 'YOUR_API_KEY';
const clientId = 'YOUR_CLIENT_ID';
const clientSecret = 'YOUR_CLIENT_SECRET';
const redirectUri = 'YOUR_REDIRECT_URI';

let isVideo = false;
```
3️⃣ Встановіть залежності
Виконайте команду:
```
npm install
```
4️⃣ Запустіть проєкт
Переконайтеся, що у Redirect URIs вказано той localhost, на якому запускається ваш проєкт.
```
npm run start
```
