var ParentChildsOverview = function () {
  this.groups = []
}

ParentChildsOverview.prototype.addGroup = function(group) {
  if (Object.prototype.toString.call( group.children ) !== '[object Array]') {
    group.children = []
  }

  if (!group.weight) {
    group.weight = 0
  }

  this.groups.push(group)
}

ParentChildsOverview.prototype.init = function(element) {
  this.element = element

  var output = ''

  _.each(this.groups, function (group) {
    output += '<ul class="group">'

    output += '<li class="header">'
    output += group.name
    output += '</li>'

    _.each(group.children, function (child) {
      output += '<li class="child">'
      output += child.subject
      output += '</li>'
    })

    output += '</ul>'
  })

  $(element).append(output)
  $('ul', element).sortable({
    items: '.child',
    connectWith: 'group'
  })

  .bind('sortupdate', function(e, ui) {

  })
}

window.createParentChildsOverview = function () {
  var item = new ParentChildsOverview()
  return item
}
