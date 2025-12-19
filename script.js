$(document).ready(function() {
            // Sample movie data
            const movies = [
                {
                    title: "John Wick: Chapter 4",
                    year: 2023,
                    rating: 8.5,
                    genre: ["Action", "Thriller"],
                    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                },
                {
                    title: "Avatar: The Way of Water",
                    year: 2022,
                    rating: 7.9,
                    genre: ["Action", "Adventure", "Sci-Fi"],
                    poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                },
                {
                    title: "The Batman",
                    year: 2022,
                    rating: 7.8,
                    genre: ["Action", "Crime", "Drama"],
                    poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                },
                {
                    title: "Top Gun: Maverick",
                    year: 2022,
                    rating: 8.3,
                    genre: ["Action", "Drama"],
                    poster: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                }
            ];
            
            // Sample series data
            const series = [
                {
                    title: "Stranger Things",
                    year: 2016,
                    rating: 8.7,
                    genre: ["Drama", "Fantasy", "Horror"],
                    poster: "https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png"
                },
                {
                    title: "The Last of Us",
                    year: 2023,
                    rating: 8.9,
                    genre: ["Action", "Adventure", "Drama"],
                    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                },
                {
                    title: "Wednesday",
                    year: 2022,
                    rating: 8.2,
                    genre: ["Comedy", "Crime", "Fantasy"],
                    poster: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                },
                {
                    title: "The Mandalorian",
                    year: 2019,
                    rating: 8.8,
                    genre: ["Action", "Adventure", "Fantasy"],
                    poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                }
            ];
            
            // Function to generate movie/series cards
            function generateCards(data, containerId) {
                const container = $(`#${containerId}`);
                container.empty();
                
                data.forEach(item => {
                    const genresHtml = item.genre.map(genre => `<span class="genre">${genre}</span>`).join('');
                    
                    const card = `
                    <div class="col-lg-3 col-md-6">
                        <div class="movie-card">
                            <img src="${item.poster}" alt="${item.title}" class="movie-poster">
                            <div class="movie-info">
                                <h3 class="movie-title">${item.title}</h3>
                                <div class="movie-meta">
                                    <span>${item.year}</span>
                                    <span class="rating"><i class="fas fa-star"></i> ${item.rating}</span>
                                </div>
                                <div class="genres">
                                    ${genresHtml}
                                </div>
                                <button class="btn btn-primary w-100 mt-3">Watch Now</button>
                            </div>
                        </div>
                    </div>
                    `;
                    
                    container.append(card);
                });
            }
            
            // Generate movie and series cards
            generateCards(movies, 'movies-container');
            generateCards(series, 'series-container');
            
            // Smooth scrolling for navigation links
            $('a.nav-link').on('click', function(e) {
                if (this.hash !== '') {
                    e.preventDefault();
                    const hash = this.hash;
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top - 70
                    }, 800);
                }
            });
            
            // Search functionality
            $('.search-box button').on('click', function() {
                const searchTerm = $('.search-box input').val().toLowerCase();
                if (searchTerm) {
                    alert(`Searching for: ${searchTerm}`);
                    // In a real application, you would filter the content here
                }
            });
            
            // Search on Enter key
            $('.search-box input').on('keyup', function(e) {
                if (e.key === 'Enter') {
                    $('.search-box button').click();
                }
            });
            
            // Navbar background on scroll
            $(window).scroll(function() {
                if ($(window).scrollTop() > 50) {
                    $('.navbar').css('background-color', 'rgba(18, 18, 18, 0.95)');
                } else {
                    $('.navbar').css('background-color', 'var(--primary-black)');
                }
            });
            
            // Update active nav link on scroll
            $(window).on('scroll', function() {
                const scrollPos = $(document).scrollTop() + 100;
                
                $('nav a.nav-link').each(function() {
                    const currLink = $(this);
                    const refElement = $(currLink.attr('href'));
                    
                    if (refElement.length && refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                        $('nav ul li a').removeClass('active');
                        currLink.addClass('active');
                    }
                });
            });
            
            // Movie card hover effect enhancement
            $(document).on('mouseenter', '.movie-card', function() {
                $(this).css('transform', 'translateY(-10px)');
            }).on('mouseleave', '.movie-card', function() {
                $(this).css('transform', 'translateY(0)');
            });
        });