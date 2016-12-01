Template.home.rendered = function() {


};

    // You can also put your ShareIt.configure here:
    Template.home.helpers({
    shareData: function() {
      return {title: '#ThisIsATestt',
      author: 'testEmail' ,
      summary: 'This is a test',
      url:'http://www.promunka.com/',
    article: 'hi'
    }

  }
});
    ShareIt.configure({
  sites: {
    'facebook': {
      'appId': 1598645950443803
    }
  },
  useFB: true,
  useTwitter: true,
  useGoogle: false,
  classes: "large btn",
  iconOnly: true,
  applyColors: true
});
