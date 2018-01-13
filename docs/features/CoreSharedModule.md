# Core & Shared Module

The `CoreModule` should contain your singleton services, single-instance components and export modules needed in the AppModule. 

The `SharedModule` should contain your common components and also export commonly used Angular modules.

## What goes into the CoreModule?

Your CoreModule contains code that will be used to instantiate your app and load some core functionality.

A common use case is to use the CoreModule for your global/HTTP services. You want to do this for every service where only a single instance should be created across the entire app.

The CoreModule, by convention, is only included once inside of the AppModule. All other modules can be lazy-loaded on demand.

You should also use the CoreModule to export third party modules that your AppModule needs, therefore keeping the AppModule as small as possible.

## What goes into SharedModule?

Your SharedModule contains code that will be used in your feature modules. But the difference is that you will import this SharedModule into the specific feature modules as needed.
