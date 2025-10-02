export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  // Массивы для месяцев в родительном падеже
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];

  return `${day} ${month}`;
}

export function formatDateWithYear(dateString: string): string {
  const date = new Date(dateString);

  // Массивы для месяцев в родительном падеже
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

export function calculateAge(birthDate: string, deathDate: string): number {
  const birth = new Date(birthDate);
  const death = new Date(deathDate);

  let age = death.getFullYear() - birth.getFullYear();

  // Проверяем, наступил ли день рождения в год смерти
  const birthMonth = birth.getMonth();
  const deathMonth = death.getMonth();

  if (
    deathMonth < birthMonth ||
    (deathMonth === birthMonth && death.getDate() < birth.getDate())
  ) {
    age--;
  }

  return age;
}

export function formatAgeText(age: number): string {
  // Определяем правильное окончание для слова "год"
  const lastDigit = age % 10;
  const lastTwoDigits = age % 100;

  // Для чисел от 11 до 19 всегда используем "лет"
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return `${age} лет`;
  }

  // Для остальных случаев смотрим на последнюю цифру
  if (lastDigit === 1) {
    return `${age} год`;
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return `${age} года`;
  } else {
    return `${age} лет`;
  }
}