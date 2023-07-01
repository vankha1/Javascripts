let pages = [];
let currentPage = 1;
const tableBodyEle = document.querySelector('#easy-table tbody');
let initData = [];
const data = tableBodyEle.querySelectorAll('tr');
for (let i = 0; i < data.length; i++){
    let row = {
        id: data[i].cells[0].innerText,
        name: data[i].cells[1].innerText,
        lastName: data[i].cells[2].innerText,
        email: data[i].cells[3].innerText,
        gender: data[i].cells[4].innerText,
        actions: data[i].cells[5].innerText
    }
    initData.push(row);
}
// console.log(initData)
// console.log(tableBodyEle.querySelectorAll('tr'))

const loadTable = (initData, currentPage) => {
    // console.log(initData)
    paginate(initData, 10);
    addPaginator();
    showPage(currentPage - 1);
}


const paginate = (data,perPage) => {
    pages = [];
    let pageNumber = 0;
    
    data.forEach((row, index) => {
        if(!pages[pageNumber]){
            // console.log(1, index);
            pages[pageNumber] = [];
        }
        // console.log(pages[pageNumber].length)
        if(pages[pageNumber].length < perPage){
            pages[pageNumber].push(row);
            if(pages[pageNumber].length == perPage){
                pageNumber++
            }
        }
    });
}


const addPaginator = () =>{
    const paginatorContainer = document.querySelector('#paginator');
    paginatorContainer.innerHTML = pages.length > 1 ? `<button onclick="previousPage()" class="paginator-button"><</button>` : '';
    for(let i = 0; i < pages.length; i++){
        const paginatorButton = `<button onclick="showPage(${i})" class="paginator-button">${i+1}</button>`;
        paginatorContainer.innerHTML += paginatorButton;
    }
    paginatorContainer.innerHTML = pages.length > 1 ? `${paginatorContainer.innerHTML}<button onclick="nextPage()" class="paginator-button">></button>` : '';
}

const nextPage = () => {
    if(currentPage < pages.length-1){
        showPage(currentPage+1)
    }
}
const previousPage = () => {
    if(currentPage > 0){showPage(currentPage-1)}; 
}


const showPage = (page) => {
    // clears the records of the tbody and iterates the records of the selected page to add new rows
    const tableBody = document.querySelector(`#easy-table tbody`);
    tableBody.innerHTML = '';
    
    // do nothing if no records
    if(pages.length < 1 || page >= pages.length) return;

    // adds a CSS class to the clicked page button
    const paginatorButtons = document.querySelectorAll('#paginator button');
    // console.log(paginatorButtons)

    Array.from(paginatorButtons).forEach((button, index) => {
        if(index-1 == page){
            // console.log(page);
            button.classList.add('active-paginator-button');
        }else{
            button.classList.remove('active-paginator-button');
        }
    });
    

    pages[page].forEach(record => {
        const tr = document.createElement('tr');
        
        Object.values(record).forEach(field => {
            const td = document.createElement('td');
            // if the current element is an iterable, content is added as a list of items
            // console.log(field)
            if(typeof field == 'object'){
                // console.log(1);
                let content = '<ul>'
                for(subfield in field){
                    content +=  '<li>' + field[subfield] + '</li>' ;
                }
                field = content + '</ul>';
            }
            td.innerHTML = field;
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
    // Disable button < and >
    if(pages.length > 1){
        paginatorButtons[pages.length+1].disabled = (page+1) == pages.length ? true : false;
        paginatorButtons[0].disabled = page == 0 ? true : false;
    }
    currentPage = page;
}


const filter = (evt) =>{
    // if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
        let searchWord = evt.target.value;
        const filteredData = initData.filter(row => {
            let fieldText = String(row.id + row.name + row.lastName + row.email + row.gender + row.actions).toLowerCase();
            // console.log(searchWord)
            if (fieldText.includes(String(searchWord).toLowerCase())) {
                // console.log(100);
                return true;
            }
            // return row.id == 1;
        })
        
        initData = filteredData; 
        console.log(initData)
        loadTable(initData, 1);
    }, 300); 
}

loadTable(initData, 1);