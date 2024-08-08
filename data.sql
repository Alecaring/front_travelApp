-- Creazione della tabella Users
CREATE TABLE Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,    -- Identificatore univoco e incremento automatico
    FirstName VARCHAR(100) NOT NULL,          -- Nome dell'utente, non può essere nullo
    LastName VARCHAR(100) NOT NULL,           -- Cognome dell'utente, non può essere nullo
    Email VARCHAR(255) NOT NULL UNIQUE,       -- Email univoca, non può essere nulla
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Data di creazione del record
    -- Campi aggiuntivi per arricchire la tabella Users
    PasswordHash VARCHAR(255) NOT NULL,       -- Hash della password, non può essere nullo
    PhoneNumber VARCHAR(15),                  -- Numero di telefono, opzionale
    DateOfBirth DATE,                         -- Data di nascita dell'utente, opzionale
    Address VARCHAR(255),                     -- Indirizzo dell'utente, opzionale
    City VARCHAR(100),                        -- Città dell'utente, opzionale
    Country VARCHAR(100)                      -- Paese dell'utente, opzionale
);

-- Creazione della tabella Flights
CREATE TABLE Flights (
    FlightID INT AUTO_INCREMENT PRIMARY KEY,    -- Identificatore univoco e incremento automatico
    AirlineName VARCHAR(100) NOT NULL,          -- Nome della compagnia aerea, non può essere nullo
    SourceCity VARCHAR(50) NOT NULL,            -- Città di partenza, non può essere nulla
    DestinationCity VARCHAR(50) NOT NULL,       -- Città di destinazione, non può essere nulla
    DepartureTime DATETIME NOT NULL,            -- Ora di partenza del volo, non può essere nulla
    ArrivalTime DATETIME NOT NULL,              -- Ora di arrivo del volo, non può essere nulla
    Latitude DECIMAL(9, 6),                     -- Latitudine del luogo di partenza o destinazione
    Longitude DECIMAL(9, 6),                    -- Longitudine del luogo di partenza o destinazione
    INDEX idx_flight_cities (SourceCity, DestinationCity), -- Indice combinato su città di partenza e destinazione
    CHECK (ArrivalTime > DepartureTime),        -- Vincolo: l'ora di arrivo deve essere successiva all'ora di partenza
    -- Campi aggiuntivi per arricchire la tabella Flights
    Price DECIMAL(10, 2) NOT NULL,              -- Prezzo del biglietto
    Duration INT NOT NULL,                      -- Durata del volo in minuti
    FlightNumber VARCHAR(20) NOT NULL UNIQUE,   -- Numero del volo, unico
    Class VARCHAR(50) DEFAULT 'Economy',        -- Classe del volo (Economy, Business, First)
    SeatsAvailable INT NOT NULL,                -- Numero di posti disponibili
    Status VARCHAR(50) DEFAULT 'Scheduled'      -- Stato del volo (Scheduled, Delayed, Cancelled)
);

-- Creazione della tabella Hotels
CREATE TABLE Hotels (
    HotelID INT AUTO_INCREMENT PRIMARY KEY,     -- Identificatore univoco e incremento automatico
    Name VARCHAR(100) NOT NULL,                 -- Nome dell'hotel, non può essere nullo
    City VARCHAR(50) NOT NULL,                  -- Città dove si trova l'hotel, non può essere nulla
    Address VARCHAR(255) NOT NULL,              -- Indirizzo completo dell'hotel, non può essere nullo
    Latitude DECIMAL(9, 6),                     -- Latitudine dell'hotel
    Longitude DECIMAL(9, 6),                    -- Longitudine dell'hotel
    Rating DECIMAL(2, 1) CHECK (Rating BETWEEN 0 AND 5), -- Valutazione dell'hotel tra 0 e 5
    INDEX idx_hotel_city (City),                -- Indice sulla città per una ricerca più veloce
    -- Campi aggiuntivi per arricchire la tabella Hotels
    NumberOfRooms INT NOT NULL,                 -- Numero di camere disponibili
    PricePerNight DECIMAL(10, 2) NOT NULL,      -- Prezzo per notte
    Amenities TEXT,                             -- Servizi offerti dall'hotel (es. Wi-Fi, piscina)
    CheckInTime TIME DEFAULT '14:00',           -- Orario di check-in
    CheckOutTime TIME DEFAULT '12:00'           -- Orario di check-out
);

-- Creazione della tabella Experiences
CREATE TABLE Experiences (
    ExperienceID INT AUTO_INCREMENT PRIMARY KEY,  -- Identificatore univoco e incremento automatico
    Name VARCHAR(100) NOT NULL,                   -- Nome dell'esperienza, non può essere nullo
    Location VARCHAR(255) NOT NULL,               -- Posizione dell'esperienza, non può essere nulla
    Latitude DECIMAL(9, 6),                       -- Latitudine del luogo dell'esperienza
    Longitude DECIMAL(9, 6),                      -- Longitudine del luogo dell'esperienza
    Category VARCHAR(50),                         -- Categoria dell'esperienza (es. avventura, relax)
    Duration INT COMMENT 'Durata in minuti',      -- Durata dell'esperienza in minuti
    INDEX idx_experience_location (Location),     -- Indice sulla posizione per una ricerca più veloce
    -- Campi aggiuntivi per arricchire la tabella Experiences
    Price DECIMAL(10, 2) NOT NULL,                -- Prezzo dell'esperienza
    AgeRestriction INT DEFAULT 0,                 -- Restrizione di età (0 se non applicabile)
    GuideIncluded BOOLEAN DEFAULT FALSE,          -- Indica se una guida è inclusa
    GroupSize INT DEFAULT 1                       -- Numero massimo di persone per gruppo
);

-- Creazione della tabella Bookings
CREATE TABLE Bookings (
    BookingID INT AUTO_INCREMENT PRIMARY KEY,     -- Identificatore univoco e incremento automatico
    UserID INT NOT NULL,                          -- Riferimento all'utente
    FlightID INT,                                 -- Riferimento al volo (può essere nullo)
    HotelID INT,                                  -- Riferimento all'hotel (può essere nullo)
    ExperienceID INT,                             -- Riferimento all'esperienza (può essere nullo)
    BookingDate DATE NOT NULL DEFAULT CURRENT_DATE, -- Data della prenotazione, predefinita alla data corrente
    Status VARCHAR(50) DEFAULT 'Pending',         -- Stato della prenotazione (Pending, Confirmed, Cancelled)
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE, -- Cancella le prenotazioni se l'utente viene cancellato
    FOREIGN KEY (FlightID) REFERENCES Flights(FlightID) ON DELETE SET NULL, -- Imposta a NULL se il volo viene cancellato
    FOREIGN KEY (HotelID) REFERENCES Hotels(HotelID) ON DELETE SET NULL, -- Imposta a NULL se l'hotel viene cancellato
    FOREIGN KEY (ExperienceID) REFERENCES Experiences(ExperienceID) ON DELETE SET NULL, -- Imposta a NULL se l'esperienza viene cancellata
    -- Campi aggiuntivi per arricchire la tabella Bookings
    TotalPrice DECIMAL(10, 2) NOT NULL,           -- Prezzo totale della prenotazione
    NumberOfGuests INT NOT NULL,                  -- Numero di ospiti per la prenotazione
    SpecialRequests TEXT                          -- Richieste speciali dell'utente (es. pasti speciali, camere vicine)
);

-- Creazione della tabella Payments
CREATE TABLE Payments (
    PaymentID INT AUTO_INCREMENT PRIMARY KEY,     -- Identificatore univoco e incremento automatico
    BookingID INT NOT NULL,                       -- Riferimento alla prenotazione
    Amount DECIMAL(10, 2) NOT NULL,               -- Importo del pagamento
    PaymentDate DATE NOT NULL DEFAULT CURRENT_DATE, -- Data del pagamento, predefinita alla data corrente
    PaymentMethod VARCHAR(50) NOT NULL,           -- Metodo di pagamento (es. Carta di Credito, PayPal)
    Status VARCHAR(50) DEFAULT 'Completed',       -- Stato del pagamento (Pending, Completed, Failed)
    FOREIGN KEY (BookingID) REFERENCES Bookings(BookingID) ON DELETE CASCADE, -- Cancella il pagamento se la prenotazione viene cancellata
    INDEX idx_payment_booking (BookingID),        -- Indice sulla prenotazione per una ricerca più veloce
    -- Campi aggiuntivi per arricchire la tabella Payments
    TransactionID VARCHAR(100) NOT NULL UNIQUE,   -- ID della transazione, univoco
    Currency VARCHAR(10) DEFAULT 'EUR'            -- Valuta del pagamento
);





