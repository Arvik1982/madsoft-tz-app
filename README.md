# React + TypeScript + Vite

##  Информационная система для проверки знаний учащихся школы
**Тест**

### Проект выполнен в рамках первичного тестирования в компанию MADSOFT

## Разработчик:
phone.kulikovarseniy@gmail.com

## Описание работы проекта:

При запуске проекта начинается отсчет времени и на экране появляется 1 вопрос.
К вопросу предлложены варианты ответа с возможностью, в зависимости от типа вопроса:
сделать выбор одного варианта,
сделать выбор нескольких вариантов,
написасть короткий ответ,
написать развернутый ответ,
Также тест может иметь ограничение по времени выполнения:
идет отсчет времени до 30 секунд, после чего появляется сообщение, что время теста вышло, но в тестовом режиме после этого функционал теста не блокируется.
При перезагрузке страницы сохраняется прогресс выполнения теста.

## Технологический стек:
React + Ts
Vite js
Redux/toolkit

## Установка и запуск проекта:
Клонировать репозиторий с gitHub: https://github.com/Arvik1982/ ; 
Установить заисимости: npm install; 
Запуск: npm run dev; 
Для работы с приложением перейдите: http://localhost:5173/


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
