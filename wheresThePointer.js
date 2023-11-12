// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

const allCubes = document.querySelectorAll('td');

for (let i = 0; i < allCubes.length; i++) {
    allCubes[i].addEventListener('click', function(e) {
        allCubes[i].innerHTML = `X = ${e.clientX}<br/>Y = ${e.clientY}`
        console.log(e.clientX, e.clientY);
    })
};
