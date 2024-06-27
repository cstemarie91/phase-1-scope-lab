var customerName = 'bob';
const leastFavoriteCustomer = "you"

upperCaseCustomerName = () => {
    customerName = customerName.toUpperCase();
  };

function setBestCustomer() {
    bestCustomer = "not bob"
    return bestCustomer

};
function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
    return bestCustomer
}

function changeLeastFavoriteCustomer() {
    
   leastFavoriteCustomer = "Least Favorite Customer"
    return leastFavoriteCustomer
}

changeLeastFavoriteCustomer();