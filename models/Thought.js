const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
    {

    },
    {
        toJSON: {
            virtuals: true,
          },
          id: false, 
    }
)

const Thought = model('Thought', thoughtSchema);
  
module.exports = Thought;