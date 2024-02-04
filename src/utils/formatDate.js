export function formatDate(dateString) {
    const date = new Date(dateString);

    // Add leading zero to day, month, hours, and minutes if needed
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // JavaScript months are 0-indexed
    const year = date.getFullYear();
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
  
    // Construct the date string in dd.mm.yyyy hh:mm format
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  }