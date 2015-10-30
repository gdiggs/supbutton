# Sup Button

Say sup at the press of a Dash Button.

https://twitter.com/supbutton

## Setup

1. Get a Twitter Application.
2. Run `docker build --rm -t supbutton .`
3. Run `docker run -it --privileged --net=host supbutton node node_modules/node-dash-button/bin/findbutton` to find your button's ID.
4. Copy `envfile.example` to `envfile` and fill in the correct values.
5. Run `docker run --env-file=envfile --privileged --net=host -it supbutton`

## License

The MIT License (MIT)

Copyright (c) 2015 Gordon Diggs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
