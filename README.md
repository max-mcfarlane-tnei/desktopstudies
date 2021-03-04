Blackstart Desktop Studies
========================

This is a repository for the Blackstart Desktop Simulations project.

Getting started 
=============================


- [Installation](#Installation)
- [Running DesktopStudies](#RunningDesktopStudies)
- [Directory](#Directory)
- [Email](#Email)

----------------------------------

# Installation
`1. Run "make.bat"`\
`2. Once all packages have been installed ("press any key, to continue" will appear), close command prompt.`\
`3. Open base directory as new project in PyCharm.`\
`4. Once PyCharm"s init. processes complete (updating skeletons, indexing etc.), set virtual environment path. Either:`\
`4.1 Select suggested directory in amber banner above code editor;`\
`Or `\
`4.1 File -> Settings -> Search "venv" -> Click configure icon -> Click "Add"`\
`4.2 Select "Existing Directory" -> Select venv engine "...repor_base_dir...\venv\Scripts\python.exe"`\
`4.3 Click "Apply" -> Click "Ok"`

----------------------------------

# RunningDesktopStudies

----------------------------------

# Directory
1. Documentation\
 `docs`
 
2. Production Code:\
 &nbsp;&nbsp;&nbsp;`DesktopStudies`\
 \
2.1 User Interface:\
&nbsp;&nbsp;&nbsp;`DesktopStudies->app`\
&nbsp;&nbsp;&nbsp;This will contain code used for operating the model through a user interface.\
 \
2.2 Data I/O:\
&nbsp;&nbsp;&nbsp;`DesktopStudies->data`\
&nbsp;&nbsp;&nbsp;This will be used to store and access input data.\

3. Process Code:\
&nbsp;&nbsp;&nbsp;`process`\
&nbsp;&nbsp;&nbsp;This directory contains scripts for fetching and processing input data\
 \
3.1 Sub-model:\
&nbsp;&nbsp;&nbsp;`process->...sub-model...`\
&nbsp;&nbsp;&nbsp;This code processes and merges GSP, Ninja and Zone demand/generation data.\

4. WIP Code:\
&nbsp;&nbsp;&nbsp;`research`\
&nbsp;&nbsp;&nbsp;This subpackage contains code being used for research and testing.

# Email

Dr. Diptargha Chakravorty - Principal Consultant\
<diptargha.chakravorty@tneigroup.com>

Max McFarlane - Technical Consultant\
<max.mcfarlane@tneigroup.com>

Obinna Unigwe - Graduate Consultant\
<max.mcfarlane@tneigroup.com>
