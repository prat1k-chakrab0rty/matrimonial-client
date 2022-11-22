import React from 'react'
import './SearchForm.css'

function SearchForm() {
    return (
        <div className='w'>
            <h3>SEARCH FOR A PERFECT PARTNER</h3>
            <div className='qw'>
                <label>Search For :</label>
                <input type='radio' name='one' />
                <label>Bride</label>
                <input type='radio' name='one' />
                <label>Groom</label>
                <p>Register Today For</p>
            </div>
            <div className='qw'>
                <label>Age :</label>
                <select>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                    <option>32</option>
                    <option>33</option>
                    <option>34</option>
                    <option>35</option>
                    <option>36</option>
                    <option>37</option>
                    <option>38</option>
                    <option>39</option>
                    <option>40</option>
                    <option>41</option>
                    <option>42</option>
                </select>
                <select>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                    <option>32</option>
                    <option>33</option>
                    <option>34</option>
                    <option>35</option>
                    <option>36</option>
                    <option>37</option>
                    <option>38</option>
                    <option>39</option>
                    <option>40</option>
                    <option>41</option>
                    <option>42</option>
                </select>
                <button>Advanced Search??</button>
            </div>
            <div className='empty'></div>
            <button className='zz'>Search</button>
        </div>
    )
}

export default SearchForm