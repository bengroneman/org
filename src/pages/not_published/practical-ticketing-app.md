## Overview
Today you'll build a modern ticketing application using Django for the backend, Chart.js for reporting, and Svelte for the end-user interface
I chose Svelte for this project because it is simple and approachable for folks new to web development, and offers all the tools you might need as a seasoned developer (such as Server-Side Rendering, and prerendering).

You can find the complete source code for this here at [github.com/bengroneman/Tickets](https://github.com/bengroneman/Tickets), otherwise follow along to get started.

## Scaffold the client side application
To get up and running quickly you can clone my [SvelteWind](https://github.com/bengroneman/SvelteWind); a starter kit for coupling Svelte and Tailwind CSS.
Otherwise, follow the [instructions](https://kit.svelte.dev/docs/creating-a-project) for building a Svelte Kit app.
I will call this project `client`, though you're welcome to label it how you see fit.

```shell
npm create svelte@latest client
cd client
npm install
npm run dev
```
**Note: choose the 'Skeleton Project' and select  cli, Prettier, and Playwright for the remaining prompts**
If not using the SvelteWind template then follow the [instructions](https://tailwindcss.com/docs/installation) to install Tailwind CSS.

## Scaffold the Django server
In the root of your project folder:
**Note: I recommend using [pipenv](https://pipenv.pypa.io/en/latest/) for handling Python virtual environments**
```shell
mkdir server
cd ./server
pipenv shell
pipenv install django django-allauth django-filter django-cors-headers
```
```shell
touch manage.py
mkdir server
touch server/__init__.py
touch server/urls.py
touch server/wsgi.py
touch server/asgi.py
touch server/settings.py
```
Populate these files with the following boilerplate:

```Python
# ./manage.py
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'server.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
```

```Python
# tickets/urls.py
from django.urls import path, re_path

from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = []

urlpatterns = format_suffix_patterns(urlpatterns, allowed=['json', 'api'])
```