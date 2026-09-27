---
# Page title
title: Scenario Learning

# Page summary for search engines.
summary: Configuration files for running the Scenario Learning component of SmartSPEC.

# Date page published
date: 2023-01-01

# Book page type (do not modify).
type: book

# Position of this page in the menu. Remove this option to sort alphabetically.
weight: 30

---

## Overview

The Scenario Learning component uses a previously captured sensor observation seed dataset, as well as models of the underlying smart space and its deployed sensors to learn semantic events and people. Change point detection is first utilized to extract individual events from occupancy count measurements. This log of events is then leveraged to define individual people and the list of attended events. Agglomerative clustering techniques are applied to the learned sets of events and people to create metaevents and metapeople; these represent the types of events and profiles of people in the seed dataset. Time-series methods are additionally applied to the sensor observation dataset to derive metatrajectory models, which help dictate the manner in which people can move between spaces.

## Configuration File

`Config.txt` is a configuration file used to run SmartSPEC in the scenario learning phase. It lists many learning parameters, as shown below: 

```
[learners]
start       = DateStr
end         = DateStr
unit        = int
validity    = int
smooth      = str (one of "EMA", "SMA")
window      = int
time-thresh = int
occ-thresh  = int

[filepaths]
spaces     = Path
metaevents = Path
metapeople = Path
people     = Path
events     = Path
plots      = Path
```

In the `learners` section, `start` and `end` refer to the start and end dates (expressed as `'YYYY-MM-DD'`) for learning. `unit` denotes the number of minutes to group connection events. `validity` refers to the number of minutes for which the client will stay around the sensor. `smooth` and `window` are used to indicate the type of smoothening function to apply to the occupancy graphs; use `smooth=SMA` to apply a simple moving average and `smooth=EMA` to apply an exponential moving average. The `time-thresh` determines a minimum duration (minutes) required to realize an event. `occ-thresh` determines the minimum number of attendees required to realize an event. 

The relative paths to files used as input / produced as output should be specified in the `filepaths` section. `plots` is a directory where plots of learned events will be saved. 

Example:
```
[learners]
start       = 2017-04-01
end         = 2017-05-01
unit        = 5
validity    = 10
smooth      = EMA
window      = 10
time-thresh = 30
occ-thresh  = 1

[filepaths]
spaces     = data/demo/Spaces.json
metaevents = data/demo/MetaEvents.json
metapeople = data/demo/MetaPeople.json
people     = data/demo/People.json
events     = data/demo/Events.json
plots      = data/demo/plots

```

## Input Seed Data

Please read the requirements for Scenario Learning mentioned [here](../installation/#requirements). 

## Running the Scenario Learning Component

Compile: None

Setup: Run `conda activate smartspec` in the Anaconda command prompt

Run: `python main.py <config-filepath>`

> [!NOTE]
> These commands should be run in the `scenario-learning` directory.

