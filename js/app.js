// Add Buyer Details
const detailsButton = document.getElementById('detail-submit-btn');
detailsButton.addEventListener("click", function() {
    const buyerDetails = document.getElementById("buyer-details-input");
    console.log(buyerDetails);


    document.getElementById('buyer-info').innerText = buyerDetails.value;
    buyerDetails.value = '';
});
// 

// Add Item name, price & quantity
const addProductButton = document.getElementById('add-details-btn');
addProductButton.addEventListener("click", function() {

    const infoTable = document.getElementById('info-table');

    //Items Data Caught
    const itemName = document.getElementById('item-name-input');
    const itemPrice = document.getElementById('item-price-input');
    const ietmQuantity = document.getElementById('item-quantity-input');
    console.log(itemName.value, itemPrice.value, ietmQuantity.value);
    //

    /* 
     <tr>
   <th >1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
      </tr>*/

    //Calculation
    const totalPrice = parseInt(itemPrice.value) * parseInt(ietmQuantity.value);
    console.log('total...', totalPrice);
    // Table creation by JS 
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    //initiate the values from input tags
    th.innerText = itemName.value;
    td1.innerText = itemPrice.value;
    td2.innerText = ietmQuantity.value;
    td3.innerText = totalPrice;

    //append the data
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    infoTable.appendChild(tr);
});