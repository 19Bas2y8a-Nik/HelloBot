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

// Обработчик всех текстовых сообщений
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  // Отвечаем на любое сообщение
  bot.sendMessage(chatId, 'Привет, я бот!');
});

// Обработчик ошибок
bot.on('polling_error', (error) => {
  console.error('Ошибка polling:', error);
});
