const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {

    },
    {
        toJSON: {
            virtuals: true,
          },
          id: false, 
    }
)

mdule.exports = reactionSchema