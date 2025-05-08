<template >
  <div class = "hello" >
    <div class = "holder" >
      <form @submit.prevent = "addSkill" >
        <ValidationProvider v-slot = "{ errors, validate }" name = "skill" rules = "required|min:5" >
          <input
              v-model = "skill"
              placeholder = "Enter a skill you have..."
              type = "text"
              @blur = "validate"
          />
          <transition enter-active-class = "animate__animated animate__flipInX"
                      leave-active-class = "animate__animated animate__flipOutX"
                      name = "alert-in" >
            <p v-if = "errors.length" class = "alert" >{{ errors[ 0 ] }}</p >
          </transition >
        </ValidationProvider >
      </form >
      <ul >
        <transition-group enter-active-class = "animate__animated animate__bounceInUp"
                          leave-active-class = "animate__animated animate__bounceOutDown"
                          name = "list" >
          <li v-for = "(data, index) in skills" :key = "index" >{{ data.skill }}
            <font-awesome-icon :icon = "['fas', 'circle-minus']" class = "icon" @click = "remove(index)" />
          </li >
        </transition-group >
      </ul >
      <p >These are the skills that you possess</p >
    </div >
  </div >
</template >

<script >
import { extend, ValidationProvider } from 'vee-validate';
import { min, required } from 'vee-validate/dist/rules';

// Add rules
extend( 'required', {
  ...required,
  message: 'This field is required',
} );

extend( 'min', {
  ...min,
  message: 'Minimum {length} characters required',
} );

export default {
  /* eslint-disable */
  name: 'Skills',
  components: {
    ValidationProvider,
  },
  data() {
    return {
      skill: '',
      skills: [
        { skill: 'Vue.js' },
        { skill: 'Frontend Developer' },
      ],
    };
  },
  methods: {
    addSkill() {
      if ( this.skill.length >= 5 ) {
        this.skills.push( { skill: this.skill } );
        this.skill = '';
      }
    },
    remove( id ) {
      this.skills.splice( id, 1 );
    }
  },
};
</script >


<style scoped >

.holder {
  background: #d2cbcb;
  border-radius: 5px;
  width: 100%;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #ecac91;
  border-radius: 5px;
  border-left: 5px solid #ea7949;
  margin-bottom: 2px;
  color: #3E5252;
}

p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}

input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3rem;
  background-color: #323333;
  color: #687F7F;
}

.alert {
  background: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding: 5px;
  margin-top: -20px;
}

.alert-in-enter-active {
  animation: bounce-in .5s;
}

.alert-in-leave-active {
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.icon {
  float: right;
  cursor: pointer;
}

</style >
