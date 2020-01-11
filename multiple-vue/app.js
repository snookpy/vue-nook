const one = new Vue({
    el: "#vue-app-one",
    data: {
        title: 'Vue App One'
    },
    methods: {
    },
    computed: {
        greet: function() {
            return 'Hello from app one :)'
        }
    }
});

const two = new Vue({
    el: "#vue-app-two",
    data: {
        title: 'Vue App Two'
    },
    methods: {
        changeTitle: function(){
            one.title = "change from vue app 2"
        }
    },
    computed: {
        greet: function() {
            return 'Yo dudes this is app two :)'
        }

    }
});

two.title = "Change from outside"