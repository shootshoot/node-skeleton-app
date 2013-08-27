#!/bin/sh
BASEDIR=$(dirname $0)
ROOTDIR=$(pwd)


read -p "App name? " appName

cp -r `echo $BASEDIR`/app-skeleton `echo $ROOTDIR`/apps/`echo $appName`
ln -s `echo $ROOTDIR`/static `echo $ROOTDIR`/apps/`echo $appName`/web/static 
