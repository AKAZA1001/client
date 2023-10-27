export const getRandomColor = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple','sky blue','maroon','navy blue',];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  