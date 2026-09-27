---
# Page title
title: Scenario Generation

# Page summary for search engines.
summary: Configuration files for running the Scenario Generation component of SmartSPEC.

# Date page published
date: 2023-01-01

# Book page type (do not modify).
type: book

# Position of this page in the menu. Remove this option to sort alphabetically.
weight: 40

---

## Overview

The Scenario Generation component takes the learned (or manually constructed) models detailing a smart space scenario, and generates appropriate synthetic datasets (e.g., trajectory dataset, sensor observation dataset). It proceeds in three steps. First, Entity Generation (optional) uses a set of metaevents and metaperson models to generate a new set of events and people to simulate, respectively. Then, the Trajectory Generator produces a scenario depicting semantic trajectories of people attending events in the smart space, followed by the sensor observation generator, which subsequently observes the presence of people in spaces and produces sensor datasets accordingly. 

## Configuration File

Another `Config.txt` is used as a configuration file used to run SmartSPEC in the scenario generation phase. It lists many simulation parameters, as shown below: 

```
[people]
number = int
generation = str (one of "none", "diff", "all")

[events]
number = int
generation = str (one of "none", "diff", "all")

[synthetic-data-generator]
start = DateStr
end   = DateStr

[filepaths]
metapeople          = Path
metaevents          = Path
people              = Path
events              = Path
spaces              = Path
sensors             = Path
output              = Path
generated-files     = Path
shortest-path-cache = Path
```

In the `people` section, `number` refers to the number of people to simulate and `generation` refers to the manner in which new people (if any) should be added. If `generation=none`, then `number` is ignored and the people specified in `filepaths/people` will be used. If `generation=diff`, then one of each metaperson will first be generated (up to `number`), then additional people will be added (up to `number`). If `generation=all`, then `number` people will be generated using metapeople. The options `number` and `generation` work similarly in the `events` section.

In the `synthetic-data-generator` section, `start` and `end` refer to strings of the form `'YYYY-MM-DD'` that denote the start and end date of the simulation. 

The relative paths to files used as input / produced as output should be specified in the `filepaths` section. Note that `shortest-path-cache` is a cache file used to store shortest paths between spaces (a default for determining trajectories between spaces).

Example: 
```
[people]
number = 500
generation = all

[events]
number = 5000
generation = diff

[synthetic-data-generator]
start = 2018-01-08
end   = 2018-01-29

[filepaths]
metapeople          = data/demo/MetaPeople.json
metaevents          = data/demo/MetaEvents.json
people              = data/demo/People.json
events              = data/demo/Events.json
spaces              = data/demo/Spaces.json
sensors             = data/demo/Sensors.json
output              = data/demo/output/
generated-files     = data/demo/
shortest-path-cache = data/demo/output/shortest-path-cache.csv
```

## Running the Scenario Generation component

Compile (Entity Generator): `g++ -std=c++17 entitygen.cpp -o entitygen` or `make entityGenCompile`

Run (Entity Generator): `entitygen <config-file>`

Compile (Synthetic Data Generator): `g++ -std=c++17 datagen.cpp -o datagen` or `make dataGenCompile`

Run (Synthetic Data Generator): `datagen <config-file>`

> [!NOTE]
> These commands should be run in the `scenario-generation` directory.