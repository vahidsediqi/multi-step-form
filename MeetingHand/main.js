

var app = new Vue({
    el: '#app',
    data: {
      step: 1,
      totalsteps: 3,
      members: [],
      member: { 
          name : '',
          lastname: '',
          email: ''
      },
      amount: 45.00
    },
    methods: {
      add: function(){
            this.members.push(this.member);
            this.member = {};
            this.step ++         
      },
      increaze: function(e) {
        this.amount * 2
      },

      gottostep1: function(){
          alert('You are goint to add a new member')
          this.step = 1
      },
    
      
    }
  });


