/*
Create an 'eventing' library out of the
Events class.  The Events class should
have methods 'on', 'trigger', and 'off'.
*/

class Events {
  constructor() {
    //storage for establishing an association between events and callbacks.
    //keys are different event names, values for each key is an array that contains all of the callbacks.
    this.events = {};
  }

  // Register an event handler.  eventName is a string. callback gets invoked when the event is triggered.
  // Taking the event name and adding it as a key to the events object
  on(eventName, callback) {
    if (this.events[eventName]) {
      //checking for presence of the event, and also the presence of an array.
      this.events[eventName].push(callback); //adding a callback to the end of the array.
    } else {
      this.events[eventName] = [callback]; //if there isn't an array we make one and add the event to it.
    }
  }

  // Trigger all callbacks associated with a given eventName. 
  // We look at our events object via the key of eventName and for every callback in that array, we invoke it.
  trigger(eventName) {
    if (this.events[eventName]) {  //checking for presence
      for (let cb of this.events[eventName]) {  //invoking each one 
        cb();
      }
    }
  }

  // Remove or Deregister all of the event handlers associated with the given eventName
  off(eventName) {
    delete this.events[eventName];
  }
}

module.exports = Events;
