

### Solving the problem

* Get the current time
    * extract hour, minute and second from current ime
* Calculate Angles of rotation per:
  * seconds
    * 60 seconds per minute = 60 rotations out of a total degree of 360.
      * 360/60 => 6 degrees/seconds
    * minutes => 60mins makes an hour
      * 360/60 => 6degrees/min  after every 60 seconds mandatory
    * hours => 60mins = 1 hour
      * we need 12 rotations on the clock
      * 360 / 12 => 30 degree per hours => after every 60 minutes
* Apply the calculated degree on each clock hand