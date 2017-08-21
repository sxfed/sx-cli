#!/bin/bash --login

if [ -n `which sxinit`]; then
 echo 'sxinit has already exist'
else
 echo 'alias sxinit="yo sx-cli"' >> ~/.bashrc
fi

if [ -n `which sxstart`]; then
 echo 'sxstart has already exist'
else
 echo 'alias sxstart="yarn run dev"' >> ~/.bashrc
fi

if [ -n `which sxstop`]; then
 echo 'sxstop has already exist'
else
 echo 'alias sxstop="yarn run stop"' >> ~/.bashrc
fi

shopt -s  expand_aliases
shopt expand_aliases


