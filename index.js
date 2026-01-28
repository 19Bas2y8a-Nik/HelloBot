require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

// Получаем токен из переменных окружения
const token = process.env.BOT_TOKEN;

if (!token) {
  console.error('Ошибка: BOT_TOKEN не найден в .env файле');
  process.exit(1);
}

// Создаем экземпляр бота
const bot = new TelegramBot(token, { polling: true });

console.log('Бот запущен и готов к работе!');

// Массив приветствий
const greetings = ['Добрый день', 'Привет', 'Здравствуйте'];

// Обработчик всех текстовых сообщений
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  // Случайным образом выбираем приветствие
  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
  
  // Отвечаем на любое сообщение
  bot.sendMessage(chatId, `${randomGreeting}, я бот!`);
});

// Обработчик ошибок
bot.on('polling_error', (error) => {
  console.error('Ошибка polling:', error);
});
