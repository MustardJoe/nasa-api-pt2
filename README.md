------------------       --BUILD NOTES--------------------------------------

I am making a second atempt at a project I have wanted to do for a while: a user interface for the NASA api.  will start with just pulling up a Nasa photo of the day from a day the user provides, will add on later functionality as interests inspire.

will have user supply their own key, and then they will be able to navigate through the api in a more "useable" format than just making a series of long querry strings in the browser url bar.  user will also supply a date, but it will default to today's date if none is supplied.

also want this version to be react-based.

11/14/2019
have a goodish version of my MVP.  needs polishing, hosting, brainstorming on further ideas (LL says user login would be nice) - but not too shabby
also, (No data before 1995-6-20)

10/28/2019
figured out/remembered how to do styling in react(sorta) so put some styling on apod comp.  working on date comp, got basic function to create today date string.

10/22/2019
Got url + key working.  Think I need the loading logic becayse my promise says it's still pending in console log.
10/21/2019
haven't worked on this for a while (job applications and PRGE). Got ApodComp to render on page with static data.
Deciding not to use withFetch format.  Will need to work on loading part later.  working on getting ApodComp to render with dynamic default (ie, load with 'today's' data, not dummy data)
10/15/2019
things are shaping up but... I need something like the 'withFetch.js' file in the rick & morty thing.  My nasa-api is like the rickandmortyapi.js.  need the withFetch equivalent.