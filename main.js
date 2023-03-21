let mark = document.querySelector('.mark-all');
let unreadComments = document.querySelectorAll('.unread-notification');
let numberOfUnreadNotifications = document.querySelector('.number-of-unread-notifications');

mark.addEventListener('click', markAllAsRead);

function markAllAsRead () {
    //mark all unread notifications as read by resetting the numberOfUnreadNotifications to 0
    numberOfUnreadNotifications.textContent = '0';

    // Removing the CSS class unread-notification that serves as visual indicator of unread status from each notification element.
    unreadComments.forEach(comment => {
        comment.classList.remove('unread-notification');
    });
}