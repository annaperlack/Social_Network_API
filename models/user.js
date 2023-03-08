const { Schema, model } = require('mongoose');
const thoughtSchema = require('./thought');

const userSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        validate: [validateEmail, 'Please fill in a valid email address'],
      },
      thoughts: [thoughtSchema],

      friends: {
        
      },
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
    }
  );
  
const User = model('user', userSchema);
module.exports = User;
  