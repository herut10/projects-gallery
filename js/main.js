console.log('Starting up');
var gProjects = [{
    "id": "sokoban",
    "name": "Sokoban",
    "title": "Better push those boxes",
    "desc": "lorem ipsum lorem ipsum lorem ipsum",
    "url": "projs/sokoban",
    "publishedAt": 1448693940000,
    "labels": ["Matrixes", "keyboard events"],
}]


function initPage() {
    var strHTML = gProjects.map(function (proj, idx) {
        return `
    <div class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="updateModal(${idx})">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" src="img/portfolio/${idx+1<10? `0${idx+1}`:idx+1}-thumbnail.jpg" alt="">
    </a>
    <div class="portfolio-caption">
      <h4>${proj.name}</h4>
      <p class="text-muted">${proj.labels.join()}</p>
    </div>
  </div>
    `
    }).join('')
    $('.portfolio-grid').html(strHTML)
}

function updateModal(idx) {
    var proj = gProjects[idx]
    $('.modal-name').html(proj.name)
    $('.modal-image').attr('src', proj.url + '/placeholder.jpg')
    $('.modal-description').html(proj.desc)
    $('.modal-date').html('published at: '+Date(proj.publishedAt))
    $('.modal-clients').html('clients')
    $('.modal-categories').html(proj.labels.join(', '))
}

function contact(subject, body) {
    window.location = `https://mail.google.com/mail/?view=cm&fs=1&to=yonaherut@gmail.com&su=${subject}&body=${body} `

}