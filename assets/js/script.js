let toggleNode = document.getElementsByClassName('tree-arrow-btn');
for (let i = 0; i < toggleNode.length; i++) {
    toggleNode[i].addEventListener('click', (e)=> {
        let arrowbtn = e.target;
        let treeFolder = arrowbtn.closest('.tree-folder');
        if (treeFolder) {
            treeFolder.classList.toggle('active');
        }
        arrowbtn.classList.toggle('tree--open');
    })
}