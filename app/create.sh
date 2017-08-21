#!/bin/bash --login

echo 'alias sxinit="yo sx-cli"' >> ~/.bashrc

echo 'alias sxstart="yarn run dev"' >> ~/.bashrc

echo 'alias sxstop="yarn run stop"' >> ~/.bashrc


shopt -s  expand_aliases
shopt expand_aliases


