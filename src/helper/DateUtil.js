const formatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
}

const formatDate = (locale, dateStr) => {
    
    const date = new Date(dateStr)
    const dateFormat = new Intl.DateTimeFormat(locale ? locale : 'es-ES', formatOptions)
    const dateFormated = dateFormat.format(date)
    return dateFormated
}

export { formatDate }