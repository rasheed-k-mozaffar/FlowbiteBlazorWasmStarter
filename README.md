# FlowbiteBlazorWasmStarter

# Overview

This template is made to speed up the process of setting up Tailwind CSS and Flowbite in a Blazor WebAssembly project so that you can begin developing
your Blazor apps much more quickly while having all the redundant setup work being taken care of.
The default non-empty Blazor templates come equipped with Bootstrap. However, this template replaces Bootstrap with Tailwind CSS, and in addition to that, it installs Flowbite, which is an open-source, free to use UI components library built on top of Tailwind CSS, the library has a plethora of well-designed, mobile-responsive and fully interactive components that you can use to build your applications.

<img width="1680" alt="Screenshot 2024-01-23 at 8 00 34 PM" src="https://github.com/rasheed-k-mozaffar/FlowbiteBlazorWasmStarter/assets/109946031/8b36ab67-ef16-458b-93ee-82f9ddfd3737">

# How to get started?

This template is designed to help you quickly set up a Blazor project with Flowbite. If you want to know more about the process and understand the steps in more depth, you can check out this link: https://flowbite.com/docs/getting-started/blazor/

To get the template, just follow the simple instructions:

1. Clone the repository into a local folder on your machine.
1. Open the project in a text editor.
1. In a terminal window, run `npm install`, this will download the required node modules for the template.
1. When done, in the terminal window, run `npx tailwindcss -i wwwroot/css/app.css -o wwwroot/css/app.min.css --watch`

> [!IMPORTANT]
> The last step is used to start the Tailwind CSS Compiler, if you haven't changed anything in the project structure, don't worry about this note, but in case you did, please make sure you specify the correct path for the input CSS file, and link the output CSS file generated after running this command, the changes should be done inside `index.html` which resides in `/wwwroot`.
