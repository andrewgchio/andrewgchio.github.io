---
# Page title
title: Installation

# Page summary for search engines.
summary: Dependencies for running each SmartSPEC component. 

# Date page published
date: 2023-01-01

# Book page type (do not modify).
type: book

# Position of this page in the menu. Remove this option to sort alphabetically.
weight: 10

---

## Download

GitHub (source files): https://github.com/andrewgchio/SmartSPEC

## Requirements

The software requirements for each component of SmartSPEC is written provided below. Note that you only need to install the dependencies for the component that you wish to use. 

### Scenario Learning

The Scenario Learning component is written in Python and requires the following dependencies: 

* [Python](https://www.python.org) (version >= 3.6.8)
* [numpy](https://numpy.org)(version >= 1.19.2)
* [pandas](https://pandas.pydata.org) (version >= 1.1.0)
* [matplotlib](https://matplotlib.org) (version >= 3.2.2)
* [scikit-learn](https://scikit-learn.org/stable) (version >= 0.24.2)
* [python-rapidjson](https://github.com/python-rapidjson/python-rapidjson) (version >= 1.5)
* [tqdm](https://github.com/tqdm/tqdm) (version >= 4.62.3)
* [ruptures](https://centre-borelli.github.io/ruptures-docs/) (for break point detection) (version >= 1.1.5)
* [MySQL Python Connector](https://dev.mysql.com/doc/connector-python/en) (version >= 8.0.13)

> [!NOTE]
> Most of these requirements can be fulfilled by using an [Anaconda](https://www.anaconda.com) environment. After installing Anaconda, open the Anaconda command line and execute: 
>
> ```bash
> conda create --name smartspec
> conda activate smartspec
> conda install python-rapidjson numpy pandas matplotlib tqdm scikit-learn 
> pip install ruptures mysql-connector-python
> ``` 
>
> To run the Scenario Learning component afterwards, you will need to activate the `smartspec` environment: 
> ```bash
> conda activate smartspec
> ```

> [!NOTE]
> There may be some secondary dependencies that may need to be installed; please refer to the installation guides for the appropriate dependency if there are issues.

#### MySQL Database Setup

A local MySQL database is used as the data source for learning metaevents and metapeople. To set up the local data source: 

* Start your local MySQL service 
* Create a database named `simulation_seed` with a table `connectivity`. This can be accomplished with the following SQL script. 
```sql
CREATE TABLE simulation_seed.connectivity 
(
    wifi_ap VARCHAR(32) NULL,
    cnx_time DATETIME NULL,
    client_id VARCHAR(64) NULL
);
```

* Populate table by importing data. This data should be in the following form:
```
wifi_ap,cnx_time,client_id
1,2017-01-01 07:30:31,81
9,2017-01-01 10:39:13,72
8,2017-01-01 10:40:08,72
...
```

> [!NOTE]
> You may need to modify the default security settings of MySQL in order to create the MySQL database (e.g., configure database user to authenticate via `mysql_native_password`. 

* Note, the local data queries can be optimized by setting indices as follows: 
```sql
CREATE INDEX cnx_date ON simulation_seed.connectivity (cnx_time);
CREATE INDEX idx_ap ON simulation_seed.connectivity (wifi_ap);
CREATE INDEX time_and_ap ON simulation_seed.connectivity (cnx_time, wifi_ap);
```

### Scenario Generation

The Scenario Generation component is written in C++17 and requires the following dependencies: 

* C++ (version >= 17)
* [boost](https://www.boost.org/) (version >= 1.68.0)
* [date](https://github.com/HowardHinnant/date) (included in project)
* [rapidjson](https://github.com/Tencent/rapidjson) (included in project)

> [!NOTE]
> We recommend that a Linux-based system (e.g., Ubuntu) is used to install and run this component.

### GUI Toolkit 

The GUI Toolkit is written in Java 8 and requires the following dependencies: 

* [Java](https://www.java.com/en/download/manual.jsp) (version >= 8)
* [Java FX](https://openjfx.io) (version >= 17)
* [json-simple](https://code.google.com/archive/p/json-simple/) (version >= 1.1.1)
* [ini4j](https://ini4j.sourceforge.net) (version >= 0.5.4)

> [!NOTE]
> We recommend that JavaFX is installed as described in the linked URL, which details the installation process for using JavaFX with an Integrated Development Environment (IDE), or with command line build tools. The `json-simple` and `ini4j` dependencies should be downloaded as `jar` files.

> [!NOTE]
> We recommend that a Linux-based system (e.g., Ubuntu) is used to install and run this component.
