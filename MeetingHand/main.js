
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
      amount: 45.00,
      fees: []
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

      feeincreament: function(){
         this.amount *= 2
         this.fees.push(this.amount)
      },
      gottostep1: function(){
          alert('You Are About To Add New Member')
          this.step = 1
      },
    },

    

  });


