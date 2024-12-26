export const getLanguageColor = (language) => {
  const colors = {
    React: 'text-blue-500',
    JavaScript: 'text-yellow-500',
    Python: 'text-green-500',
    Swift: 'text-orange-500',
    Java: 'text-red-500',
    'HTML/CSS': 'text-purple-500',
    PHP: 'text-indigo-500',
  };
  return colors[language] || 'text-gray-500';
};

export const formatSize = (size) => {
  return size.toLocaleString();
};