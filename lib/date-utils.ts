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
  const lastDigit = age % 10;
  const lastTwoDigits = age % 100;

  // Исключения для чисел от 11 до 19
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return `${age} лет жизни`;
  }

  // Правила для остальных чисел
  if (lastDigit === 1) {
    return `${age} год жизни`;
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return `${age} года жизни`;
  } else {
    return `${age} лет жизни`;
  }
}