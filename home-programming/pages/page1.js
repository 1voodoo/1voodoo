console.log('I second page');
const container = document.getElementById('elem');
const btnAll = document.querySelectorAll('.btn');
for (const item of btnAll) {
    item.addEventListener('click', (event) => {
        if(event) {
            item.classList.add('btn2')
        }    
        for (const item of btnAll) {
            if(item.className === 'btn btn2') {
                
            }
        }
        // if (event & item.className === 'btn btn2') {
        //     item.classList.remove('btn2')
        // }
        // item.classList.add('btn2')
        // if (item.className === 'btn btn2') {
        //     item.classList.remove('btn2')
        // }
        
    })
}
