export default function(actionType:string) {
  switch (actionType) {
    case '1':
      return 'Lập trình'
    case '2':
      return 'Phân tích'
    case '3':
      return 'Kiểm thử'
    case '4':
      return 'Thiết kế'
    case '5':
      return 'Nghiên cứu'
    case '6':
      return 'Thảo luận'
    case '7':
      return 'Lên kế hoạch'
    case '8':
      return 'Gặp khách hàng'
    case '9':
      return 'Khác'
  
    default:
      return 'Một giá trị nằm ngoài sự hiểu biết của tôi 🤨';
  }
}