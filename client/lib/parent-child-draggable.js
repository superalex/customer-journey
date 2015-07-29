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

    output += '<div class="header">'
    output += group.name
    output += '</div>'

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
      /*

      This event is triggered when the user stopped sorting and the DOM position has changed.

      ui.item contains the current dragged element.
      ui.index contains the new index of the dragged element (considering only list items)
      ui.oldindex contains the old index of the dragged element (considering only list items)
      ui.elementIndex contains the new index of the dragged element (considering all items within sortable)
      ui.oldElementIndex contains the old index of the dragged element (considering all items within sortable)
      ui.startparent contains the element that the dragged item comes from
      ui.endparent contains the element that the dragged item was added to (new parent)

      */

     console.log(ui)
  })
}

window.createParentChildsOverview = function () {
  var item = new ParentChildsOverview()
  return item
}
